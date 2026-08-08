import type { NavigatorScreenParams } from '@react-navigation/native';

export type ProjectStackParamList = {
  ProjectsList: undefined;
  ProjectDetail: {
    projectId: string;
  };
};

export type RootTabParamList = {
  HomeTab: undefined;
  ProjectsTab: NavigatorScreenParams<ProjectStackParamList>;
};
