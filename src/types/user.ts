

export interface UserState {
  users: UserProps[];
  meta: Meta;
}

export interface UserProps {
  id: number;
  profile_picture_url: string;
  full_name: string;
  email: string;
  exception_alert_email: string;
  is_active: boolean;
  is_verified: boolean;
  permission: string;
}

export interface Meta {
  total_no_items: number;
  total_no_pages: number;
  page: number;
  size: number;
  count: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}
