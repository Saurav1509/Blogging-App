import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"

export const Blogs = () => {
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogsCard
            authorName={"Saurav"}
            title={"Blog post title"}
            content={"content of the blog. This is the conten of the blog. It contains not so important info and is just used to fill up the space of the page so that it looks like a pretty big piece of content and i can see how an actual big blog will look on the website. Thanks if you have read it till here. You are a great person and will find yourself in good places in the future. Maybe i dont know and i can predit future dont believe whatever i say or have said uptill this point"}
            publishedDate={"4th April 2024"}
          />
          <BlogsCard
            authorName={"Saurav"}
            title={"Blog post title"}
            content={"content of the blog. This is the conten of the blog. It contains not so important info and is just used to fill up the space of the page so that it looks like a pretty big piece of content and i can see how an actual big blog will look on the website. Thanks if you have read it till here. You are a great person and will find yourself in good places in the future. Maybe i dont know and i can predit future dont believe whatever i say or have said uptill this point"}
            publishedDate={"4th April 2024"}
          />
          <BlogsCard
            authorName={"Saurav"}
            title={"Blog post title"}
            content={"content of the blog. This is the conten of the blog. It contains not so important info and is just used to fill up the space of the page so that it looks like a pretty big piece of content and i can see how an actual big blog will look on the website. Thanks if you have read it till here. You are a great person and will find yourself in good places in the future. Maybe i dont know and i can predit future dont believe whatever i say or have said uptill this point"}
            publishedDate={"4th April 2024"}
          />
        </div>

      </div>
    </>
  )
}
