import RoundedPills from "@/_components/globals/RoundedPills";

export default function PillsContainer({ pillsData }: { pillsData: string[] }) {
  return (
    <div className="flex">
      {pillsData.map((textData, textIndex) => {
        return <RoundedPills text={textData} key={textIndex} />;
      })}
    </div>
  );
}
