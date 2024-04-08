import { useState } from "react"
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';
import { TextAreaField, Button } from '@aws-amplify/ui-react';
import './AddPost.css';
import * as mutations from "../graphql/mutations";

export default function AddPost() {
    const [text, setText] = useState("")
    const [file, setFile] = useState(null)

    function generateUniqueFileName() {
        const extension = file.name.split('.').splice(-1, 1)[0];

        return `${uuidv4()}.${extension}`;
    }

    async function newPost() {
        const filename = generateUniqueFileName();

        try {
            await uploadData({
                key: filename,
                data: file,
                options: {
                    contentType: file.type
                }
            });
        } catch (error) {
            console.log("Error uploading file: ", error);
        }

    }

    return (
        <div class="container">
            <form onSubmit={e => {
                e.preventDefault();
                newPost()
            }}>

                <div>
                    <TextAreaField
                        autoComplete="off"
                        descriptiveText="Share a beautiful thought today"
                        direction="column"
                        labelHidden={true}
                        name="texrt"
                        placeholder="Share a beautiful thought today"
                        rows="3"
                        size="small"
                        wrap="nowrap"
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div>

                    <input type="file" name="file" accept="image/png, image/jpeg" onChange={e => setFile(e.target.files[0])} />
                    
                </div>
                <Button type="submit">Post</Button>
            </form>
        </div >
    );
};
