import Image from 'next/image'
import styled from '@emotion/styled'
import headerIcon from '../../assets/icons/signupHeaderIcon.svg';

const SignUpHeader: React.FC = () => {

  const Container = styled.div`
  height: 70px;
  position:fixed; 
  width: 100%;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
`

  return (
    <Container >
      <Image src={headerIcon} alt='headerIcon' />
    </Container>
  )

};

export default SignUpHeader;