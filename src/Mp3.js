import { useEffect, useState  } from 'react';
import * as qs from 'qs'
import axios from 'axios';



const Mp3 = () => {

  const [search, setSearch] = useState("");
  console.log(search, "useState")
  let userQuery = '';

  useEffect(() => {
    const clientID = `${process.env.REACT_APP_CLIENT_ID}`;
    const clientSecret = `${process.env.REACT_APP_CLIENT_SECRET}`;
    const body = {'grant_type': 'client_credentials'}
    const urlSpotify = "https://accounts.spotify.com/api/token";
    const urlSearch = "https://api.spotify.com/v1/search";
    axios({
      method: "post",
      url: urlSpotify, 
      data: `${qs.stringify(body)}`, // Convert object to string
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: clientID, // User ID
        password: clientSecret,  // User Secret
      },
    })
    .then((response) => {
      // console.log(response);
      axios({
        url: urlSearch,
        method: "GET",
        headers: {
          Authorization: `${response.data.token_type} ${response.data.access_token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        params: {
          q: 'drake',
          type: 'track', 
        }
      }).then((searchResponse) => {
        console.log(searchResponse);
      }).catch((err) => console.log(err));

    })
    .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="dataCall">
      <fieldset>
        {/* <div>
          <input type="radio" value="track" name="type" /> track
          <input type="radio" value="artist" name="type" /> artist
          <input type="radio" value="album" name="type" /> album
        </div> */}
        <div>
          <label>Discover anything music</label>
          <input placeholder='ex. Linkin Park'></input>
          <button onClick={ () => setSearch('')}> Search
          </button>
        </div>
      </fieldset>



    </div>
  )
}

export default Mp3;