import { Component } from 'react'

class SingleComment extends Component {
    render() {
        const getBooks = (id) => {
            const URL = "https://striveschool-api.herokuapp.com/api/comments/"
            fetch(URL + id)
                .then((res) => {
                    if (res.ok) {
                        return res.JSON()
                    } else {
                        throw new Error("errore nella response", res.status)
                    }
                })
                .then((arrayOfComments) => {
                    console.log("Questi sono i commenti", arrayOfComments)
                })
                .catch((err) => {
                    alert("Errore nella richiesta", err)
                })
        }
        return ()
    }
}

export default SingleComment