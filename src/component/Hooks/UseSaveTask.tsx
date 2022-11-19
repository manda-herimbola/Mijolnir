import {useRecoilValue} from "recoil";
import ProfileName from "../../state/Name/ProfileName";

const useSaveTask = ( index: number, service: string, setTil: any, setErrorTask: any ) => {

    const profile: any = useRecoilValue(ProfileName)
    const taskUrl: string = 'http://localhost:5000/tasks/'

    const SaveTask: any = async ( ev: SubmitEvent ) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const data: any = Object.fromEntries( formData.entries() )

        const task: Object = { nb: index, work: service, ...profile, ...data }
        const dataVide: any = data.title !== '' && data.description !== ''
        const dataBoucle: any = data.title !== 'Title' && data.description !== 'Description'

        if( dataVide && dataBoucle ){

            try {

                const response: any = await fetch( taskUrl,{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(task)
                })

                setTil({ til: (await response.json()).newDataBase, num: 1 })

            }catch (err){ console.log(err) }

        }else { setErrorTask('Task is empty') }

    }

    return SaveTask;
};

export default useSaveTask;