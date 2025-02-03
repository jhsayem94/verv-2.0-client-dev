import { Button } from "@/components/ui/button";

const AreLandlord = () => {
  return (
    <section className="w-full mt-[100px] bg-[#F6FFF4] shadow-[0px_4px_200px_rgba(232,249,247,0.2)] py-20 flex items-center justify-center">
      <div className="w-[600px]">
        <div className="text-center">
          <p className="text-xl font-semibold leading-[120%] text-colorTextLime">
            Stay Informed
          </p>
          <h2 className="text-5xl font-bold text-colorTextPrimary mt-2 my-4 leading-[120%%]">
            Are you a landlord?
          </h2>
          <p className="text-lg leading-[150%] text-colorTextSecondary">
            Discover smarter ways to rent your property and get listed today.
          </p>
        </div>
        <div>
          <form
            action=""
            className="flex h-[72px] py-2 pr-2 pl-6 justify-between items-center self-stretch rounded-[40px] border border-[#D5EDCE] bg-white mt-8"
          >
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-grow p-2 rounded-md focus:outline-none"
            />

            <Button
              type="submit"
              className="w-[157px] h-[56px] px-[16px] py-[8px] rounded-[32px] bg-colorButton"
            >
              Submit
            </Button>
          </form>
          <p className="text-sm font-semibold leading-[120%] text-center text-colorTextSecondary mt-4">
            Join <span className="text-colorTextLime">10,000+</span> other
            landlords in our Verv Community
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreLandlord;
