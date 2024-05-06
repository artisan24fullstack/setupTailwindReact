function Forms() {
  // https://tailwindcss-custom-forms.netlify.app/
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <label className="block">
            <span className="text-gray-700">Input</span>
            <input type="email" className="form-input mt-1 block w-full" placeholder="john@example.com" />
          </label>
          <br />
          <label className="block">
            <span className="text-gray-700">Textarea</span>
            <textarea className="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some long form content."></textarea>
          </label>
          <br />
          <label className="block">
            <span className="text-gray-700">Select</span>
            <select className="form-select block w-full mt-1">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
          <br />
          <div className="block">
            <span className="text-gray-700">Checkboxes</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-indigo-600" />
                  <span className="ml-2">Option 1</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-green-500" />
                  <span className="ml-2">Option 2</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-pink-600" />
                  <span className="ml-2">Option 3</span>
                </label>
              </div>


            </div>
          </div>
          {/* Before extracting a custom class */}
          <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
            Save changes
          </button>

          {/* After extracting a custom class */}
          <button className="btn-primary">
            Save changes
          </button>
        </div>
      </div>
      {/* 
      <div className="antialiased text-gray-900 px-6">
        <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
          <h2 className="text-2xl font-bold">Reset styles</h2>
          <p className="mt-2 text-lg text-gray-500">
            These are form elements this plugin styles by default.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Input (text)</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (email)</span>
                <input
                  type="email"
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (email, multiple)</span>
                <input
                  type="email"
                  multiple
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (password)</span>
                <input
                  type="password"
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (date)</span>
                <input type="date" className="form-input mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (datetime-local)</span>
                <input type="datetime-local" className="form-input mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (month)</span>
                <input type="month" className="form-input mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (number)</span>
                <input type="number" className="form-input mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (search)</span>
                <input type="search" className="form-input mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (time)</span>
                <input type="time" className="form-input mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (week)</span>
                <input type="week" className="form-input mt-1 block w-full" />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Input (tel)</span>
                <input
                  type="tel"
                  multiple
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (url)</span>
                <input
                  type="url"
                  multiple
                  className="form-input mt-1 block w-full"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Select</span>
                <select className="form-select block w-full mt-1">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Select (single, with size)</span>
                <select className="form-select block w-full mt-1" size="3">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Select (multiple)</span>
                <select className="form-multiselect block w-full mt-1" multiple>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Select (multiple, with size)</span>
                <select className="form-multiselect block w-full mt-1" multiple size="3">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Textarea</span>
                <textarea
                  className="form-textarea mt-1 block w-full h-24"
                  rows="3"
                  placeholder="Enter some long form content."
                ></textarea>
              </label>
              <fieldset className="block">
                <legend className="text-gray-700">Checkboxes</legend>
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input className="form-checkbox" type="checkbox" checked />
                      <span className="ml-2">Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                      <span className="ml-2">Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input className="form-checkbox" type="checkbox" />
                      <span className="ml-2">Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="block">
                <legend className="text-gray-700">Radio Buttons</legend>
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input className="form-radio" type="radio" checked name="radio-direct" value="1" />
                      <span className="ml-2">Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input className="form-radio" type="radio" name="radio-direct" value="2" />
                      <span className="ml-2">Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input className="form-radio" type="radio" name="radio-direct" value="3" />
                      <span className="ml-2">Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-2xl font-bold">Untouched</h2>
          <p className="mt-2 text-lg text-gray-500">
            These are form elements we don't handle (yet?), but we use this to make sure we haven't
            accidentally styled them by mistake.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 items-start">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Input (range)</span>
                <input type="range" className="mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (color)</span>
                <input type="color" className="mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (file)</span>
                <input type="file" className="mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">Input (file, multiple)</span>
                <input type="file" multiple className="mt-1 block w-full" />
              </label>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );

}

export default Forms;
