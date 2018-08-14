using FileStorage.Server.Models.IdentityModels;
using FileStorage.Server.Models.UserVModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FileStorage.Server.Helpers
{
    public static class MappingHelper
    {
        public static dynamic CreateUserEntity(string role)
        {
            switch (role)
            {
                case "Admin":
                    return new ApplicationUser(); // new AdminlUser();
                case "General":
                    return new ApplicationUser(); // new GeneralUser();
                default:
                    return new ApplicationUser();
            }
        }

        public static dynamic CreateUserVModel(string role) 
        {
            switch (role)
            {
                case "Admin":
                    return new UserVModel();
                case "General":
                    return new UserVModel();
                default:
                    return new UserVModel();
            }
        }

        public static IEnumerable<TOutModel> MapCollectionModels<TInModel, TOutModel>(IEnumerable<TInModel> users) where TOutModel : class
        {
            var model = (TOutModel)Activator.CreateInstance(typeof(TOutModel));

            foreach (var u in users)
            {
                yield return MapModels(u, model);
            }
        }

        public static IEnumerable<TOutModel> MapCollectionModels<TInModel, TOutModel>(IEnumerable<TInModel> users, IEnumerable<TOutModel> models) where TOutModel : class
        {
            for (int i = 0; i < users.Count(); i++)
            {
                yield return MapModels( users.ElementAt(i), models.ElementAt(i) );
            }
        }

        public static TOutModel MapModels<TInModel, TOutModel>(TInModel inModel, TOutModel outModel)
        {
            foreach (var inProp in inModel.GetType().GetProperties())
            {
                foreach (var outProp in outModel.GetType().GetProperties().Where(p => p.Name == inProp.Name))
                {
                    outProp.SetValue(outModel, inProp.GetValue(inModel));
                }
            }

            return outModel;
        }

        public static IEnumerable<TOutModel> WithNavProperty<TOutModel, TInModel>(this IEnumerable<TOutModel> models, 
                                                                            IEnumerable<TInModel> properties) 
                                                                            where TInModel: class
                                                                            where TOutModel: class
        {
            return MapCollectionModels<TInModel, TOutModel>(properties, models);
        }
    }
}