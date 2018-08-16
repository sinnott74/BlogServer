import { Router, Request, Response } from "express";
import { BlogPost } from "../entity";
import Auth from "../core/Auth";
const router = Router();

router.get("/", async function(req: Request, res: Response) {
  const blogPosts = await BlogPost.listBlogPostDetails();
  res.json(blogPosts);
});

router.get("/:id", async function(req: Request, res: Response) {
  const id = req.params.id;
  const blogPost = await BlogPost.getBlogPostDetails(id);
  res.json(blogPost);
});

router.post("/", Auth.middleware, async function(req: Request, res: Response) {
  const blogpostData = { ...req.body };
  const blogPost = new BlogPost(blogpostData);
  await blogPost.save();
  res.json(blogPost);
});

router.put("/:id", Auth.middleware, async function(
  req: Request,
  res: Response
) {
  const blogpostData = { ...req.body };
  const blogPost = new BlogPost(blogpostData);
  await blogPost.save();
  res.sendStatus(200);
});

router.delete("/:id", Auth.middleware, async function(
  req: Request,
  res: Response
) {
  const id = req.params.id;
  await BlogPost.delete({ id });
  res.sendStatus(200);
});

export default router;
