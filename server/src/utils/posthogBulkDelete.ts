import axios from "axios";

export const posthogVdoBulkDelete = async () => {
    try {
        // find session reply data
        const response = await axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://us.i.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/session_recordings`,
            headers: {
                'Authorization': `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`
            }
        })

        const daysAgo = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000); // 20days - 20 * 24 * 60 * 60 * 1000
        let videoId: string[] = []

        /* filter out the session reply data if the date less then  20days ago and viewed = true
        or click_count, keypress_count or mouse_activity_count = 0*/
        response.data.results.filter((itm: { person: { created_at: string | number | Date; }; viewed: boolean; click_count: number; keypress_count: number; mouse_activity_count: number; id: string; }) => {
            const date = new Date(itm.person.created_at);
            if ((date < daysAgo && itm.viewed) || itm.click_count === 0 || itm.keypress_count === 0 || itm.mouse_activity_count === 0) {
                videoId.push(itm.id)
            }
        });
        // console.log(videoId)

        // delete the session reply
        await Promise.all(videoId.map(async (id) => {
            try {
                await axios.request({
                    method: 'delete',
                    maxBodyLength: Infinity,
                    url: `https://us.i.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/session_recordings/${id}`,
                    headers: {
                        'Authorization': `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`
                    }
                });
            } catch (error: any) {
                throw new Error(error);
            }
        }))
    } catch (error: any) {
        throw new Error(error);
    }
}
