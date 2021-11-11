import Link from 'next/link'
import { Fragment } from 'react';

function newsHome(){
    return(
        <Fragment>
            <h1>This is newsHome</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-awesome">
                        Learning NextJs is really cool..!
                    </Link>
                </li>
                <li>
                    <Link href="/news/sample-blog">
                        Sample Blog Post
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}


export default newsHome ;