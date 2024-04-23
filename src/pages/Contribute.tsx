import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import TextArea from "../components/ui/TextArea";



const ContributePage = () => {
  const{state}=useLocation();
  console.log(state);
  return (
    <div>
      <h2 className="text-center mb-3">Email : {state.email}</h2>
      <h2 className="text-center mb-3">Issue: Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <TextArea  />
        <Button> Submit new issue</Button>
      </form> 
    </div >
  )

}

export default ContributePage;