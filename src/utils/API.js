import axios from  'axios';

export default {
    getRandomUser: function () {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(({ data }) => {
                const results = data.results.map( obj => {
                    return {
                        image: obj.picture.thumbnail,
                        name: `${obj.name.first} ${obj.name.last}`,
                        phone: obj.phone,
                        email: obj.email,
                        dob: obj.dob.date
                    }
                })
                resolve(results);
            })
            .catch(err => reject(err));
        })
    }
};
  