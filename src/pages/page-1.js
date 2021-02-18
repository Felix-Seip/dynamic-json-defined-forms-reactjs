import data from "../data/form.json";
import MyForm from "../components/my-form";

function Page1() {
  return <MyForm data={data.page1} />;
}

export default Page1;
