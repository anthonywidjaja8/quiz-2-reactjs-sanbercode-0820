function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function(resolve, reject) {
        var books = [
            {name: "shincan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 40, isColorful: true},
            {name: "algoritma", totalPage: 300, isColorful: false}
        ]
        if(amountOfPage > 0) {
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful))
        } else {
            var reason = new Error("maaf parameter salah")
            reject(reason)
        }
    })
}

filterBooksPromise(false, 250).then(books => console.log(books)).catch(err => console.log(err))
filterBooksPromise(true, 50).then(books => console.log(books)).catch(err => console.log(err))