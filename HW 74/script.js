const activityElement = document.querySelector('#activity');
const activityButtn = document.querySelector('#activityButtn');

const fetchActivity = async () => {
  try {
      const activity =  await (await fetch('https://www.boredapi.com/api/activity')).json();
      const activityObj = JSON.stringify(activity, null, 2)
      activityElement.innerHTML = '';
      activityElement.innerHTML = activityObj;
  } catch (e) {
    console.error(e);
  }
}

activityButtn.addEventListener('click', fetchActivity);