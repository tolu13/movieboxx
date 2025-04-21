export enum locationType {
  INDOOR = 'INDOOR',
  OUTDOOR = 'OUTDOOR',
  DRIVE_IN = 'DRIVE_IN',
}

// literal union type
export enum TheaterStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}
// tuple
export type seatLayout = [rows: number, colums: number];

export interface BaseTheater {
  name: string;
  location: locationType;
  status: TheaterStatus;
  seats: seatLayout;
}
// Api res generic
export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type createTheaterDto = BaseTheater;
export type updateTheaterDto = Partial<BaseTheater>;
// union / intersection
export type TheaterRequest =
  | createTheaterDto
  | (updateTheaterDto & { id: string });

// Conditional type
export type InferId<T> = T extends { id: infer U } ? U : never;

// Generic function (could be moved to a service utils file)
export function handleTheaterRequest<T extends TheaterRequest>(
  input: T,
): ApiResponse<T> {
  if ('id' in input) {
    const id = input.id;
    console.log('Updating theater with ID:', id);
  } else {
    console.log('Creating new theater:', input.name);
  }

  return {
    success: true,
    data: input,
    message: 'Theater processed successfully',
  };
}
