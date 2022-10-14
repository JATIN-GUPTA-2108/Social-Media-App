import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (<>

    <div className=" ml-lg-5 mt-4 p-3" >
        <div className="row justify-content-start">
          <div className="col-md-7 col-md-push-7 mr-lg-4 pb-4"style={{"backgroundColor":"white"}}>
<div className="mt-4 mb-4">

<Posts setCurrentId={setCurrentId} />

</div>
           </div>
          <div className="col-md-4 col-md-pull-4 mb-3 h-50 mt-4 pb-5 pt-4"style={{"backgroundColor":"white" , "paddingBottom":"0px"}}>
<div className="mt-2">
<Form currentId={currentId} setCurrentId={setCurrentId} />

          
</div>
</div>
          
        </div>
      </div>
  </>
  );
};

export default Home;
