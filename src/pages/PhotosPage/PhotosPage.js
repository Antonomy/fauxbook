import { useState, useEffect } from 'react'
import styles from './PhotosPage.module.scss'
// import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'


export default function PhotosPage({user}) {

    const [photos, setPhotos] = useState([])
    const [completedPhotos, setCompletedPhotos] = useState([])
    const [newPhoto, setNewPhoto] = useState({
        title: '',
        caption: '',
        completed: true
    })
    const createPhoto = async () => {
        const body = { ...newPhoto }
        try {
            const response = await fetch('/api/photos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdPhoto = await response.json()
            const photosCopy = [createdPhoto, ...setPhotos]
            setPhotos(photosCopy)
            setNewPhoto({
                title: '',
                caption: '',
                completed: true
            })
        } catch (error) {
            console.error(error)
        }
    }

    //Delete a photo
    const moveToCompleted = async (id) => {
        try {
            const index = photos.findIndex((photo) => photo._id === id)
            const photosCopy = [...photos]
            const subject = photosCopy[index]
            subject.completed = true
            const response = await fetch(`/api/photos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedPhoto = await response.json()
            const completedTDsCopy = [updatedPhoto, ...completedPhotos]
            setCompletedPhotos(completedTDsCopy)
            photosCopy.splice(index, 1)
            setPhotos(photosCopy)
        } catch (error) {
            console.error(error)
        }
    }
    const getPhotos = async () => {
        try {
            const response = await fetch('/api/photos')
            const foundPhotos = await response.json()
            setPhotos(foundPhotos.reverse())
            const responseTwo = await fetch('/api/photos/completed')
            const foundCompletedPhotos = await responseTwo.json()
            setCompletedPhotos(foundCompletedPhotos.reverse())
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getPhotos()
    }, [])
    return (

        <main className={styles.main}>
            <input className={styles.input} type="text" placeholder='Insert Photo Here'
                value={newPhoto.title}
                onChange={(e) => {
                    setNewPhoto({ ...newPhoto, title: e.target.value })
                }}
                onKeyDown={(e) => {
                    e.key === 'Enter' && createPhoto() && window.location.reload();
                }}
            />
            <input className={styles.input} type="text" alt="caption" placeholder='Caption (Optional)'
                value={newPhoto.caption}
                onChange={(e) => {
                    setNewPhoto({ ...newPhoto, caption: e.target.value })
                }}
                onKeyDown={(e) => {
                    e.key === 'Enter' && createPhoto() && window.location.reload();
                }}
            />

            <h3 className={styles.photoh3}>Photos</h3>
            <div className={styles.table}>
                {photos.map(photo => {
                    return (
                        <div className={styles.photo} key={photo._id}>
                            <img className={styles.title} src={`${photo.title}`} alt=""></img>
                            <div className={styles.info}>{photo.caption}</div>
                            <div className={styles.borrar} onClick={() => moveToCompleted(photo._id)}>Delete</div>
                        </div>

                    )
                })
                }
            </div>
        </main>
    )

}