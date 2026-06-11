export interface SignupPayload {
  FirstName: string
  LastName: string
  Username: string
  Email: string
  Password: string
  PhoneNumber?: string
  DOB: string
}

export interface LoginPayload {
  Email: string
  Password: string
}

/** Mirrors the API's UserResponse (camelCased on the wire). */
export interface UserResponse {
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  phoneNumber?: string
  dob: string
  role: string
}

/** Mirrors the API's AuthResponse returned by the login endpoint. */
export interface AuthResponse {
  userId: string
  firstName: string
  lastName: string
  email: string
  username: string
  role: string
  accessToken: string
  tokenExpiresAt: string
}
