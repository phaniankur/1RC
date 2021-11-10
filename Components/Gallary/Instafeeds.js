import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'
import { ClosedCaption } from '@material-ui/icons'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;
    console.log(props.token)
    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                // .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
                .get("https://graph.instagram.com/me/media?",
                {
                    params:{
                        fields: "media_url, media_type",
                        limit: 20,
                        access_token: "IGQVJVZAF9hbTVTMzZAiWXp5QXl2UFVjTUtvWUt2VXRUVU15bFFiaHBHN2xpWEQ5TjRoZAFFUcWJBNXY2enZALdktFaWV5VUZA6ZAk9EYkRSQlFRa3ZABZAEtGQ3U5c0lTaU40VGZAfSElOODc1bFk5WjVVbFBoVgZDZD"
                    }
                })
                .then((resp) => {
                    setFeedsData(resp.data.data)
                    console.log(feeds)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;