const express = require("express");

const router = express.Router();

const { Post, Image, User, Comment } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      //where: { id: lastId },
      limit: 10, // 10개만 가져옴
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          // 보안상 비밀번호 제외하고 필요한 정보만 전달
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          // 댓글의 작성자 정보 로드
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
