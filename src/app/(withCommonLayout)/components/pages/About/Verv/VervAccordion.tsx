import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VervAccordion = () => {
  return (
    <div className="px-[20px]">
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            What is Verve all about?
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-colorTextSecondary flex flex-col gap-4">
              <p className="leading-[24px]">
                Founded in 2018, Verve quickly became the UK’s largest letting
                agent with one clear mission: to make renting fairer, safer, and
                more affordable for everyone.
              </p>
              <p className="leading-[24px]">
                We guide you every step of the way—from finding the right tenant
                to setting up the tenancy and even collecting the rent. We offer
                services like gas and electricity certifications, inventories,
                photography, insurance, and more, all tailored to your needs.
              </p>
              <p className="leading-[24px]">
                Over 7,084,000 people have used Verv to find and let property,
                helping to create over 1,271,148 tenancies. As a member of the
                Property Ombudsman for Lettings and several other trusted
                associations, you can be confident that you&apos;re in safe
                hands.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            How does it work?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ad
            rerum numquam ducimus? Impedit odio deleniti autem. Alias unde fuga
            vitae tempore dicta blanditiis quae vel distinctio nesciunt
            reprehenderit. Maxime.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            What charges are there for Landlords?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis, quos sunt fugit recusandae, fugiat, suscipit sed
            debitis praesentium ratione minima eveniet eos incidunt facere dicta
            tempore aspernatur quasi aliquid?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            What charges are there for Tenants?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            voluptas quas repellat voluptatum ratione et maiores sequi facere,
            incidunt necessitatibus veritatis impedit odio corporis provident
            dolorem, animi enim dolor magnam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            What is Rent Now?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            excepturi sed, minus repellendus fugiat vel eum inventore corrupti
            reprehenderit quis aliquid eaque ullam error consequuntur saepe
            voluptatibus eos veniam illo?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            How do I start Rent Now?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eveniet quisquam voluptas quos aliquid facere et odio
            ut debitis! Odit eaque aperiam error eligendi distinctio, nobis
            voluptatum minima neque ipsam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            Why do tenants have to place a holding deposit?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam enim
            animi minus quos natus ea dolor vitae voluptates, veritatis
            necessitatibus nemo, sequi tempora a. Quidem quasi quo in temporibus
            libero!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-colorTextPrimary text-2xl font-semibold leading-[32px]">
            Who keeps the holding deposit?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, consequuntur eveniet, distinctio quia quo minima rem,
            sunt quibusdam reprehenderit facilis placeat modi corrupti nemo
            fugit nihil laborum cum perspiciatis nulla?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default VervAccordion;
