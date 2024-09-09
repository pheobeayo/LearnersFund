import  { useState } from "react";
import Footer from "../components/Footer";
import axios from 'axios';
import useRegStudent from "../hooks/useRegStudent";

const CreateProposal = () => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const registar = useRegStudent();
  const onChange = () => {
    setChecked(!checked);
  };

  const handleSelectFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: import.meta.env.VITE_APP_PINATA_API_KEY,
            pinata_secret_api_key: import.meta.env.VITE_APP_PINATA_SECRET_API_KEY,
          },
        }
      );

      const fileUrl = response.data.IpfsHash;
      const tx = {
        image: fileUrl,
      };

      // Call the registar function with the file URL
      registar(tx.image);


    } catch (error) {
      console.log("Pinata API Error:", error);
      setIsLoading(false)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative w-[100vw] h-[100vh]">
      <section className="w-screen h-full">
        <div className="grid grid-cols-2 mt-4 md:flex md:flex-row sm:flex sm:flex-row">
          <div className="bg-[#DADADA] w-1/2">
            <div className="mt-48 mx-20">
              <h1 className="text-[#331000] font-extrabold text-4xl leading-10">
                Create an account to
                <br />
                get started
              </h1>
              <div className=" bg-white border-[#593A9E]  rounded-full w-3/4 h-2 mt-2 ">
                <div className=" bg-[#593A9E] border-[#593A9E]  rounded-full w-1/2 h-2 "></div>
              </div>
              <h3 className="text-[#091913] font-normal text-base mt-2">
                Step 1 of 2
              </h3>
            </div>
          </div>
          <div >
            <form className=" mx-20 md:28 mt-28 w-3/4" onSubmit={handleSubmit}>
              <div className="mb-1">
                <label
                  className="block text-[#0C0814] text-sm font-bold mb-2"
                  
                >
                  Email address
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="emailaddress"
                  type="email"
                  placeholder="Add your email address"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-[#0C0814] text-sm font-bold mb-2"
                  
                >
                  Password
                </label>

                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-[#0C0814] text-sm font-bold mb-2"
                  
                >
                  Name
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="E.g Naomi Roberts"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-[#0C0814] text-sm font-bold mb-2"
                  
                >
                  Country of residence
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  type="text"
                  placeholder="E.g Ghana"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-[#0C0814] text-sm font-bold mb-2"
                 
                >
                  Name of school
                </label>
                <input
                  className="bg-white border-[#06214A] border-2 rounded w-full py-2 px-3 text-[#020C17] leading-tight focus:outline-none focus:shadow-outline"
                  id="school"
                  type="text"
                  placeholder="E.g Obafemi Awolowo University"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-[#0C0814] text-sm font-bold mb-2"
                  
                >
                  Upload your Transcript
                </label>

                <input
                  className="block w-full text-sm text-[#331000] border border-[#06214A] rounded-lg cursor-pointer bg-white focus:outline-none focus:shadow-outline"
                  id="large_size"
                  type="file"
                  onChange={handleSelectFile} // Call handleSelectFile when file selected
                  required
                />
              </div>
              {/* Checkbox */}
              
              <div className="flex items-center">
                <input id="link-checkbox" type="checkbox" value={checked} className="w-4 h-4 text-[#331000] bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                  onChange={onChange} />
                <label  className="ms-2 text-[#0C0814] text-sm font-bold mb-2">I agree to LearnersFund’s <a href="/terms" className="text-[#331000] dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
               </div>
              
              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#593A9E] hover:bg-[#06214A]"
                  disabled={!checked || !selectedFile || isLoading} // Disable button if checkbox not checked or no file selected or loading
                >
                  {isLoading ? "Loading..." : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
     
      <Footer />
      
    </main>
  );
};

export default CreateProposal;
