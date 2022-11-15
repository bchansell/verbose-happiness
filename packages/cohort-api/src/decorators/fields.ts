import { GraphQLResolveInfo } from "graphql";
import { createParamDecorator } from 'type-graphql';
// import {
//   parseResolveInfo,
// 	ResolveTree,
// }  from 'graphql-parse-resolve-info';

function Fields(level = 1): ParameterDecorator {
  return createParamDecorator(({ info }: {info: GraphQLResolveInfo}) => {
    // calculate an object with info about requested fields
    // based on GraphQL `info` parameter of the resolver and the level parameter
    // const parsed = parseResolveInfo(info) as ResolveTree;
    console.log(JSON.stringify(info));
    return {

    };
  });
}
export { 
  Fields
}