import styled from 'styled-components';

const Heading = styled.h1`
  background: ${({ theme }) => theme.colors.secondaryColor} ;
`
export default function Home() {
  return (
    <Heading>Home</Heading>
  );
}

/**
 * LINK repo babel styled-components: 
 *  https://github.com/vercel/next.js/blob/canary/examples/with-styled-components-babel
 */