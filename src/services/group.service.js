import ApiService from "../components/utils/base-api/api-service";

class GroupService extends ApiService {
  constructor() {
    super({
      baseURL: `http://localhost/internet-applications/public`,
    });
  }

  getUserGroups() {
    return this.get("/api/getMyGroups");
  }

  addNewGroup(group) {
    return this.post("/api/addGroup", group);
  }

  getGroupMembers(groupId, search) {
    return this.post("/api/getGroupMembers", {
      group_id: groupId,
      search_query: search,
    });
  }

  deleteMember(groupId, userId) {
    return this.get("/api/deleteUser", {
      params: { user_id: userId, group_id: groupId },
    });
  }

  getMemberByEmail(email) {
    return this.post("/api/getUserInfoByEmail", { email });
  }

  addMembersToGroup(groupId, userIds) {
    return this.post("/api/addUsersToGroup", {
      group_id: groupId,
      user_ids: userIds,
    });
  }
}

export const groupService = new GroupService();
