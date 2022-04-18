import './error-page.css';

function ErrorPage(): JSX.Element {
  return (
    <div className='container'>
      <div className='row content'>
        <div className='col-lg-12'>
          <div></div>
        </div>
        <div className='col-lg-12'>
          <h1>404</h1>
          <h2>Oops, the page you are looking for does not exist.</h2>
          <p>
            You may want to head back to the homepage.
            <br/>
            If you think something is broken, report a problem.
            <br/>
          </p>
          <a href='/#' className='btn'>RETURN HOME</a>
        </div>
      </div>
      <div className='bg-img'>
        <div></div>
      </div>
    </div>
  );
}

export default ErrorPage;
