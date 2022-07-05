import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model, ObjectId, Schema as Mschema } from 'mongoose';

/**
 * Mongoose Locations Schema
 */
export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  skills: [];

  @Prop({ required: true })
  hobbies: [];

  
}

export const UserSchema = SchemaFactory.createForClass(User);

/**
 * Mongoose Locations Document
 */
export interface IUser extends Document {
  readonly _id: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly skills: [];
  readonly hobbies: [];
  
}

export const userSchemaModel = model<IUser>('User', UserSchema)
