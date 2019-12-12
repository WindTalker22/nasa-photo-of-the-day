import React, { useState } from "react";
import { Button, Fade } from "reactstrap";

const ContentBox = props => {
  // console.log(props.explanation)
  const [fadeIn, setFadeIn] = useState(!true);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <section className="contentBox">
      <Button color="primary" onClick={toggle}>
        Click Here For Explanation
      </Button>
      <Fade className="explanation" in={fadeIn} tag="h5" className="mt-3">
        {props.explanation}
      </Fade>
    </section>
  );
};

export default ContentBox;
