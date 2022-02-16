import { Module } from '@nestjs/common';
import { LessonResolver } from './lessons.resolver';

@Module({
  providers: [LessonResolver],
})
export class LessonModule {}
