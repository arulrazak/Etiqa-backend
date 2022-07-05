import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './schemas/user.schema'
import { Model } from 'mongoose';

export class UserService {

  constructor( @InjectModel('User') private readonly userModel: Model<User>,) {}

  create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel({
      username:createUserDto.username,
      email:createUserDto.email,
      phone:createUserDto.phone,
      skills:createUserDto.skills,
      hobbies:createUserDto.hobbies,

    });
    return createUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return this.userModel.findOne({id}).exec()
  }

  update(id: string,data ,updateUserDto) {
    return this.userModel.findByIdAndUpdate(id,data,{new:true})
  }

  remove(id: number) {
    return this.userModel.deleteOne().exec()
  }
}
