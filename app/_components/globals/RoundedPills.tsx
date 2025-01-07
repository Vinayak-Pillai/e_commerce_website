export default function RoundedPills({ text }: { text: string }) {
  return (
    <div className="product-description">
      <div className="tags-container">
        {/* <button className="bg-tertiaryColorLightShade text-tertiaryColor px-2 py-1 mr-2 font-bold z-50 rounded-sm text-xs"> */}
        <button className="bg-primaryColorLightShade text-primaryColor px-2 py-1 mr-2 font-bold z-50 rounded-sm text-xs">
          {text}
        </button>
      </div>
    </div>
  );
}
