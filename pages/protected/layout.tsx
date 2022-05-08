/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";

  const Layout: NextPage = () => {
      return(
          <div className="scroll-smooth">
          <section className="py-10">
            <div className="container mx-auto">
            <h1 className="text-xl pb-5">Container</h1>
                <div className="p-3 border rounded-lg shadow-md">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos repellendus perspiciatis, necessitatibus dicta voluptatibus asperiores! Explicabo quisquam sit adipisci modi iste quidem consequuntur possimus aliquam natus inventore, debitis rerum a tempora unde corrupti vitae labore qui quod autem praesentium maxime numquam id necessitatibus doloribus! Quis reiciendis, repudiandae voluptatibus soluta non nulla facilis culpa ratione architecto quidem modi enim voluptates inventore expedita voluptatum officiis beatae magni vel illum necessitatibus sed maiores similique! Veniam dignissimos quas a neque optio nisi eius. Suscipit quas repudiandae quos modi dolorem quis cum tenetur vero sequi, minus dolor quidem cupiditate provident saepe non ipsam et.</p>
                </div>
            </div>
          </section>
          <section className="py-10">
            <div className="container mx-auto">
            <h1 className="text-xl pb-5">Float</h1>
                <div className="p-3 border rounded-lg shadow-md">
                    <img src="/images/tes.jpg" className="h-[100px] w-[100px] float-left mr-3" alt="ayo the pizza here" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maiores deleniti at repellendus blanditiis quos reprehenderit porro sequi aspernatur laboriosam. Quis molestiae maxime sapiente placeat molestias distinctio quae quidem asperiores voluptatibus, qui incidunt vitae, consequuntur perspiciatis officia reprehenderit saepe tempora fugiat repudiandae ipsum a porro harum? Similique aut iste autem dolores corporis molestiae. Accusamus alias quo sequi. Pariatur nisi deserunt neque quo rerum, aliquid saepe? Quod labore aliquid similique in eum recusandae blanditiis cupiditate repellat quos! At maxime itaque recusandae, commodi placeat omnis ratione accusantium dolore sint eos, voluptatibus quaerat id, rem odit corrupti labore quas suscipit quae? In, aliquam.</p>
                </div>
            </div>
          </section>
          <section className="py-10">
            <div className="container mx-auto relative">
            <h1 className="text-xl pb-5">Position (penting karena ada cara buat posisiin absolute ke tengah)</h1>
            <div className="absolute right-1/2 translate-x-1/2 top-7 cursor-pointer"><span className="text-2xl">🤨</span></div>
            <div className="fixed bottom-5 right-5 cursor-pointer"><a href="#" className="text-2xl">😎</a></div>
                <div className="p-3 border rounded-lg shadow-md">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos repellendus perspiciatis, necessitatibus dicta voluptatibus asperiores! Explicabo quisquam sit adipisci modi iste quidem consequuntur possimus aliquam natus inventore, debitis rerum a tempora unde corrupti vitae labore qui quod autem praesentium maxime numquam id necessitatibus doloribus! Quis reiciendis, repudiandae voluptatibus soluta non nulla facilis culpa ratione architecto quidem modi enim voluptates inventore expedita voluptatum officiis beatae magni vel illum necessitatibus sed maiores similique! Veniam dignissimos quas a neque optio nisi eius. Suscipit quas repudiandae quos modi dolorem quis cum tenetur vero sequi, minus dolor quidem cupiditate provident saepe non ipsam et.</p>
                </div>
            </div>
          </section>
          <section className="py-10">
            <div className="container mx-auto">
            <h1 className="text-xl pb-5">Column</h1>
                <div className="container mx-auto border rounded-lg shadow-lg p-10 mt-2 columns-3">
                    <img src="https://source.unsplash.com/600x400" alt="image" className="mb-4" />
                    <img src="https://source.unsplash.com/600x400" alt="image" className="mb-4" />
                    <img src="https://source.unsplash.com/600x400" alt="image" className="mb-4" />
                    <img src="https://source.unsplash.com/600x400" alt="image" className="mb-4" />
                    <img src="https://source.unsplash.com/600x400" alt="image" className="mb-4" />
                    <img src="https://source.unsplash.com/600x400" alt="image" className="mb-4" />
                </div>
            </div>
          </section>
          <Link href="/protected/responsive">
          <a className="py-20">Next</a>
          </Link>
          </div>
      )
  }

  export default Layout;