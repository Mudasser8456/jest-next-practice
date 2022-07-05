import Header from '../components/header';
import NearForm from '../components/nearLogin/NearForm';


const LoginWithNear:React.FC = () => {

  return (
    <>
      <Header title={'Create NEAR account'} />
      <NearForm  />
     
    </>
  );
};

export default LoginWithNear;