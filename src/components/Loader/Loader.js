import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
export const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer>
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="140"
          width="140"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          //   glassColor="#ff4500" // orangered
          color="#808080" // сірий колір
        />
      )}
    </LoaderContainer>
  );
};
