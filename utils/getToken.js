const endPoint ="https://prod-in.100ms.live/hmsapi/googleclassroomclone.app.100ms.live/";

export default async function getToken(role) {
  // Fix in endPoint and roomId
    const response = await fetch(`${endPoint}api/token`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: '54321', // User ID assigned by you (different from 100ms' assigned id)
        role: role, // listener , speaker , moderator
        room_id: "621763b758e91474bc186b69"
      }),
    });
  
    const { token } = await response.json();
  
    return token;
  }