//dynamic news page routing [].js

import {useRouter} from 'next/router'


function detailPage(){ 
  //nextjs custom hook
  const router  = useRouter()
  //send a request to backend API to fetch the news item with newsID
  const newsID = router.query.newsID;
   

    return(
        <div>
            <h1>News Detail Page</h1>
           
        </div>
    )
}


export default detailPage;