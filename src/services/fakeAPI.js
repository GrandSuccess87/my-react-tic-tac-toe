import Statuses from '../components/gameHeaderComponent/gameHeaderEnum';

const fakeAPI = {
  
    getStatus: async (marks, next_player, current_player) => {
      return Statuses.IN_PROGRESS;
    }
    
  };
  
  export default fakeAPI;