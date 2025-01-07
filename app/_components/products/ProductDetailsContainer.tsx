const ProductDetailsHeader = ({ detailsHeader }: { detailsHeader: string }) => {
  return (
    <>
      <p className="text-md mt-3 font-semibold">{detailsHeader}</p>
    </>
  );
};
const ProductDetailsText = ({ detailsText }: { detailsText: string }) => {
  return (
    <>
      <p className="text-sm text-secondaryColor">{detailsText}</p>
    </>
  );
};

export default function ProductDetailsContainer({
  detailsHeader = "",
  detailsText = "",
}: {
  detailsHeader: string;
  detailsText: string;
}) {
  return (
    <>
      <ProductDetailsHeader detailsHeader={detailsHeader} />
      <ProductDetailsText detailsText={detailsText} />
    </>
  );
}
