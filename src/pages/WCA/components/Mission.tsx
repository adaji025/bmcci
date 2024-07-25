const Mission = () => {
  return (
    <div className="app-width flex flex-col lg:flex-row gap-10 xl:gap-20 justify-between mt-20 overflow-hidden">
      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Philosophy
        </div>
        <div className="max-w-[600px] mt-3">
          <h2 className="font-medium text-[20px] md:text-[24px]">
            Empowering Women, Enriching Communities: Unlocking the Potential
            Within
          </h2>
        </div>
        <div className="mt-3">
          Literacy is a key tool to unlock potentials. Education and
          self-discovery are the most important components to unlocking
          individual potential, and we aim to inspire women, girls, and youth to
          find their voices and pursue their dreams.
        </div>
        <div className="mt-3">
          Understanding Human rights as a universal and inalienable is also key
          as we advocate for the rights of women, girls, and youth to be
          respected, protected, and fulfilled
        </div>

        <div className="bg-[#92CD0033]/20 px-5 py-3 capitalize rounded w-max text-xs text-[#2C6700] font-medium mt-10">
          WCA Guiding Principles:
        </div>

        <ul className="mt-5 list-disc ml-5">
          <li>
            We Collaborate: We believe in the power of collective action and
            partnership to drive meaningful change.
          </li>
          <li>
            We Empower: We strive to empower women, girls, and youth to take
            ownership of their lives and communities.
          </li>
          <li>
            We are Inclusive: We embrace the potential of diversity and promote
            equal opportunities for all, regardless of background or
            circumstances.
          </li>
          <li>
            We do not compromise Social Justice: as we commit to addressing the
            root causes of gender-based violence and promoting human rights for
            all.
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <div className="bg-[#92CD0033]/20 px-5 py-3 rounded w-max text-xs text-[#2C6700] font-medium">
          Our Core Beliefs:
        </div>
        <div className="max-w-[600px] mt-3">
          <h2 className="font-medium text-[20px] md:text-[24px]">
            Gender equity is a fundamental human right, and we strive to create
            a world where women and girls can thrive without fear of violence or
            discrimination.
          </h2>
        </div>

        <div className="mt-3">
          Magnifying our voices as a collective via Community-led solutions are
          the most effective way to drive lasting change, and we work
          hand-in-hand with grassroots organisations to co-create a brighter
          future for our generations to come.
        </div>
      </div>
    </div>
  );
};

export default Mission;
