import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//a description of the app.
const HomePage = () => {
  //set page title on navigation to page
  useEffect(() => { document.title = "Math Teacher" })
  return (
    <main className="text-margins">
      {/* declaration of purpose */}
      <h1 className="large-heading-size center-text">
        Math Teacher is a website dedicated to helping you learn math,
        and teaching you math, all for free.
      </h1>
      {/* explanation of features */}
      <h2>
        You can enter a problem to solve or let Math Teacher generate problems for you.
        Then, solve it, check your answer, or even let Math Teacher teach you how to solve
        the problem you are working on.
      </h2>
      <hr/>
      {/* how we make money */}
      <h2>
        Math Teacher makes money off advertsing when you are online,
        but, if you do not have internet available, many of our features--those that don't
        require login--are available while you are offline, provided you have let Math Teacher
        fully load one time with internet.  To access your past questions and results, you need
        to login and have internet available as it requires your web browser to communicate
        with our servers.
      </h2>
      <hr></hr>
      {/* create account heading */}
      <h1 className="large-heading-size center-text">
        Create an Account
      </h1>
      {/* explanation of account features */}
      <h2>
        To let Math Teacher save what problems you have completed
        so that you may refer back to them and view your progress,
        please create an account:
      </h2>
      {/* create account link */}
      <div className="center-text">
        <Link to="/createAccount" className="link">
          Create Account
        </Link>
      </div>
      {/* spacing at bottom */}
      <br/>
      <br/>
      <br/>
      <br/>
    </main>
  );
}
export default HomePage