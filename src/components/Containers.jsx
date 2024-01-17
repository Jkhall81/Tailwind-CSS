import React from "react";

const Containers = () => {
  return (
    <>
      <div className="container mx-auto mt-12">
        <article>
          <h3>Article One</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus
            rem fugiat facere sit esse dolorum, laudantium minima omnis
            consectetur impedit veritatis eveniet voluptate distinctio tempora
            provident, sequi, cum voluptas at dolore assumenda repellendus culpa
            fuga. Mollitia adipisci asperiores obcaecati dignissimos autem
            vitae, cum inventore quis, nemo repudiandae ea non voluptas eius
            nisi.
          </p>
        </article>
        <section className="space-y-4">
          <div className="bg-slate-100 m-2">Hello World</div>
          <div className="bg-slate-100 ml-2">Hello World</div>
          <div className="bg-slate-100 mr-2">Hello World</div>
          <div className="bg-slate-100 mt-2">Hello World</div>
          <div className="bg-slate-100 mb-2">Hello World</div>
        </section>

        <section className="flex mt-6 space-x-4">
          <div className="bg-slate-100 p-2">Hello World</div>
          <div className="bg-slate-100 pl-2">Hello World</div>
          <div className="bg-slate-100 pr-2">Hello World</div>
          <div className="bg-slate-100 pt-2">Hello World</div>
          <div className="bg-slate-100 pb-2">Hello World</div>
        </section>
      </div>
    </>
  );
};

export default Containers;
