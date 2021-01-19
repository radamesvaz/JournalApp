import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">


                    <input
                        type="text"
                        placeholder="some awesome title"
                        className="notes__title-input"
                        autoComplete="off"
                    />

                    <textarea
                        placeholder="what happened today"
                        className="notes__textarea-input"
                    >

                    </textarea>

                <div className="notes__image">
                    <img
                        src="https://www.elsoldemexico.com.mx/doble-via/srysn4-blade-runner.jpg/ALTERNATES/LANDSCAPE_1140/blade%20runner.jpg"
                        alt="imagen blade runner"
                    />
                </div>

            </div>
        </div>
    )
}
