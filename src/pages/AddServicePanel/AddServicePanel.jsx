const AddServicePanel = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const shortDescription = form.shortDescription.value;
    const detailDescription = form.detailDescription.value;
    const price = form.price.value;
    const currentDate = new Date();
    const dateTime = currentDate.toLocaleString();
    const formData = {
      name,
      shortDescription,
      detailDescription,
      price,
      dateTime,
    };
    console.log(formData);
  };

  return (
    <div>
      <div className="py-4 bg-inherit ">
        <div className="px-4 mx-auto ">
          <div className="p-6 bg-white rounded-md md:w-[60%] mx-auto">
            <div className="px-4 mb-4 md:text-center">
              <p className="pb-2 text-xl font-bold text-black  uppercase">
                upload a new product
              </p>
              <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-300"></div>
              </div>
            </div>
            <form onSubmit={formHandler}>
              <div className="container px-4 mx-auto"></div>
              {/* name */}
              <div className="relative my-6">
                <input
                  id="id-01"
                  type="text"
                  name="name"
                  placeholder="Clip Path"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-01"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Product Name
                </label>
              </div>

              {/* short description */}

              <div className="relative mb-6">
                <textarea
                  id="id-b07"
                  type="text"
                  name="shortDescription"
                  placeholder="like - Carefully hand-drawn clipping paths for crisp, clean photos"
                  required
                  rows="3"
                  className="relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  htmlFor="id-b07"
                  className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Short Description
                </label>
              </div>

              {/* detail description */}

              <div className="relative mb-6">
                <textarea
                  id="id-b08"
                  type="text"
                  name="detailDescription"
                  placeholder="like - Carefully hand-drawn clipping paths for crisp, clean photos"
                  required
                  rows="3"
                  className="relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                ></textarea>
                <label
                  htmlFor="id-b08"
                  className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Detail Description
                </label>
              </div>

              {/* price */}

              <div className="relative my-6">
                <input
                  id="id-01"
                  type="number"
                  name="price"
                  required
                  placeholder="price"
                  className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-01"
                  className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Price
                </label>
              </div>

              {/* Pick a file */}

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Pick a image</span>
                </label>
                <input
                  type="file"
                  name="imageURL"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text-alt">Max Size 5 MB</span>
                </label>
              </div>

              {/* submit button */}

              <div className="mt-7">
                <button className="btn btn-outline btn-primary">
                  Upload Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServicePanel;
