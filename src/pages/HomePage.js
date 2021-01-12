import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//a description of the app.
const HomePage = () => {
  //set page title on navigation to page
  useEffect(() => { document.title = "Math Student" })
  return (
    <main className="text-margins">
      {/* declaration of purpose */}
      <h1 className="large-heading-size center-text">
        Math Student is a website dedicated to helping you learn math,
        and teaching you math, all for free.
      </h1>
      {/* explanation of features */}
      <h2>
        You can enter a problem to solve or let Math Student's programtic Math Teachers generate problems for you.
        Then, solve it, check your answer, or even let the Math Teachers teach you how to solve
        the problem you are working on.
      </h2>
      <hr/>
      {/* create account heading */}
      <h1 className="large-heading-size center-text">
        Create an Account
      </h1>
      {/* explanation of account features */}
      <h2>
        To let Math Student save what problems you have completed
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