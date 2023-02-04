// import { useState, useEffect } from 'react'
// import styles from './Photo.module.scss'
// import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'

// export default function Photo () {

//     const [photos, setPhotos] = useState([])
//     const [newPhoto, setNewPhoto] = useState({
//         pic: ''
//     })
//     const createPhoto = async () => {
//         const body = {...newPhoto}
//         try {
//             const response = await fetch('/api/photos', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(body)
//             })
//             const createdPhoto = await response.json()
//             const photosCopy = [createdPhoto,...setPhotos]
//             setPhotos(photosCopy)
//             setNewPhoto({
//                 pic: ''
//             })
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     //Delete a photo
//     const moveToCompleted = async (id) => {
//         try {
//             const index = photos.findIndex((photo) => photo._id === id)
//             const photosCopy = [...photos]
//             const subject = photosCopy[index]
//             subject.completed = true
//             const response = await fetch(`/api/photos/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(subject)
//             })
//             const updatedPhoto = await response.json()
//         //    const completedTDsCopy = [updatedPhoto, ...completedPhotos]
//         //    setCompletedPhotos(completedTDsCopy)
//             photosCopy.splice(index, 1)
//             setPhotos(photosCopy)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     const getPhotos = async () => {
//         try{
//             const response = await fetch('/api/photos')
//             const foundPhotos = await response.json()
//             setPhotos(foundPhotos.reverse())
//             const responseTwo = await fetch('/api/photos/completed')
//             const foundCompletedPhotos = await responseTwo.json()
//         } catch(error){
//             console.error(error)
//         }
//     }
//     useEffect(() => {
//         getPhotos()
//     }, [])
//     return(<>
//         <input id="input" type="text" placeholder='Insert Photo Here'
//         value={newPhoto.title}
//         onChange={(e) => {
//             setNewPhoto({...newPhoto, title: e.target.value})
//         }}
//         onKeyDown={(e) => {
//             e.key === 'Enter' && createPhoto()
//         }}
//         /><br />

//         <h3 id="photoh3">Photos</h3>
//         <div id="table">
//         {photos.map (photo => {
//             return(
//                 <div id="photo" key={photo._id}>
//                     <div className="info">Photo: {photo.title}</div>
//                     <img id="pic"src={`${photo.pic}`} alt=""></img>
//                     <div id="borrar"onClick={() => moveToCompleted(photo._id) }>Delete</div>
//                 </div>

//             )})
//         }
//         </div>
//     </>)
// }
