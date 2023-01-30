export const View = (() => {
    const domstr = {
        container: '.container',
        reloadButton: '.reloadbtn',
        card: '.card',
        dobButton: '.showDobbtn'
    }
    const render = (ele, tmp) => {
        ele.innerHTML = tmp
    }
    const createTmp = (arr) => {
        let tmp = ''
        console.log(arr)
        arr.forEach((ele, idx) => {
            tmp += `
            <li>
                <img src=${ele.picture.thumbnail} alt=${ele.name.first} ${ele.name.last}/>
                <div>
                <p>name: ${ele.name.title} ${ele.name.last}</p>
                <p>email: ${ele.email}</p>
                <p>phone: ${ele.phone}</p>`
            tmp += ele.showDob ? `<p id='${idx}' class='showDobbtn'>Birthday: ${ele.dob.date}</p>`: `<button class='showDobbtn' id='${idx}'>Show Dob</button>`   
            tmp += `</div>
            </li>`
        })
        console.log(tmp)
        return tmp
    }
    return {
        domstr,
        render,
        createTmp
    }
}) ()